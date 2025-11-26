const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// @desc    Add a new product
// @route   POST /api/products
// @access  Admin
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subcategory, sofaType, image, dimensions, material, color, specifications } = req.body;

    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      subcategory,
      sofaType,
      image,
      dimensions,
      material,
      color,
      specifications,
    });

    res.status(201).json({
      message: 'Product added successfully',
      product,
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.deleteOne();

    res.json({ message: 'Product removed' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// @desc    Get product hierarchy for navigation
// @route   GET /api/products/hierarchy
// @access  Public
const getProductHierarchy = async (req, res) => {
  try {
    const products = await Product.find({}).select('category subcategory sofaType');
    
    const hierarchy = {};

    products.forEach(product => {
      const { category, subcategory, sofaType } = product;
      
      if (!category) return;

      if (!hierarchy[category]) {
        hierarchy[category] = {};
      }

      if (subcategory) {
        if (!hierarchy[category][subcategory]) {
          hierarchy[category][subcategory] = new Set();
        }
        
        if (sofaType) {
          hierarchy[category][subcategory].add(sofaType);
        }
      }
    });

    // Convert to array structure expected by frontend
    const formattedHierarchy = Object.keys(hierarchy).map(category => {
      const subcategories = hierarchy[category];
      const subItems = Object.keys(subcategories).map(subcategory => {
        const sofaTypes = Array.from(subcategories[subcategory]);
        
        const subItem = {
          name: subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          path: `/category/${category}/${subcategory}`,
        };

        if (sofaTypes.length > 0) {
          subItem.submenu = sofaTypes.map(type => ({
            name: type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            path: `/category/${category}/${subcategory}/${type}`,
          }));
        }

        return subItem;
      });

      const catItem = {
        name: category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        path: `/category/${category}`,
      };

      if (subItems.length > 0) {
        catItem.submenu = subItems;
      }

      return catItem;
    });

    res.status(200).json(formattedHierarchy);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  getProductHierarchy,
};
