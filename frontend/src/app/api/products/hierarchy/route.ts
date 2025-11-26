import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/lib/models/Product";

const toTitleCase = (value?: string | null) => {
  if (!value) {
    return "";
  }

  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find({}, "category subcategory sofaType")
      .lean()
      .exec();

    const hierarchy = new Map<string, Map<string, Set<string>>>();

    products.forEach((product) => {
      const category = product.category as string | undefined;
      const subcategory = product.subcategory as string | undefined;
      const sofaType = product.sofaType as string | undefined;

      if (!category) {
        return;
      }

      if (!hierarchy.has(category)) {
        hierarchy.set(category, new Map());
      }

      if (subcategory) {
        const subMap = hierarchy.get(category)!;
        if (!subMap.has(subcategory)) {
          subMap.set(subcategory, new Set());
        }

        if (sofaType) {
          subMap.get(subcategory)!.add(sofaType);
        }
      }
    });

    const formatted = Array.from(hierarchy.entries()).map(([category, subMap]) => {
      const subItems = Array.from(subMap.entries()).map(([subcategory, sofaTypes]) => {
        const subItem: any = {
          name: toTitleCase(subcategory),
          path: `/category/${category}/${subcategory}`,
        };

        if (sofaTypes.size > 0) {
          subItem.submenu = Array.from(sofaTypes).map((type) => ({
            name: toTitleCase(type),
            path: `/category/${category}/${subcategory}/${type}`,
          }));
        }

        return subItem;
      });

      const categoryItem: any = {
        name: toTitleCase(category),
        path: `/category/${category}`,
      };

      if (subItems.length > 0) {
        categoryItem.submenu = subItems;
      }

      return categoryItem;
    });

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error("Error building product hierarchy:", error);
    return NextResponse.json(
      { message: "Failed to load product hierarchy" },
      { status: 500 }
    );
  }
}
