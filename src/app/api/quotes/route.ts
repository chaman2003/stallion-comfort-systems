import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import Quote from '@/models/Quote';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    await clientPromise; // Ensure MongoDB connection

    const quotes = await Quote.find({ userId })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      quotes,
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, items, description, totalEstimatedPrice, customerNotes, urgency, preferredContactMethod } = body;

    if (!userId || !items || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'At least one item is required' },
        { status: 400 }
      );
    }

    await clientPromise; // Ensure MongoDB connection

    const quote = await Quote.create({
      userId,
      items,
      description,
      totalEstimatedPrice,
      customerNotes,
      urgency: urgency || 'medium',
      preferredContactMethod: preferredContactMethod || 'email',
      status: 'pending',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Quote created successfully',
        quote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating quote:', error);
    return NextResponse.json(
      { error: 'Failed to create quote' },
      { status: 500 }
    );
  }
}
