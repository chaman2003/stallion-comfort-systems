import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuoteItem {
  productId?: string;
  productName: string;
  category?: string;
  quantity: number;
  specifications?: string;
  notes?: string;
}

export interface ISellerResponse {
  respondedAt?: Date;
  message?: string;
  quotedPrice?: number;
  estimatedDelivery?: string;
  terms?: string;
  attachments?: string[];
}

export interface IQuote extends Document {
  _id: string;
  quoteId: string; // Human-readable quote ID (e.g., "QT-2025-0001")
  userId: mongoose.Types.ObjectId;
  items: IQuoteItem[];
  description: string;
  totalEstimatedPrice?: number;
  status: 'pending' | 'responded' | 'closed' | 'accepted' | 'rejected';
  sellerResponse?: ISellerResponse;
  customerNotes?: string;
  urgency?: 'low' | 'medium' | 'high';
  preferredContactMethod?: 'email' | 'phone' | 'whatsapp';
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema: Schema = new Schema(
  {
    quoteId: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        productId: {
          type: String,
        },
        productName: {
          type: String,
          required: true,
        },
        category: {
          type: String,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        specifications: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
    ],
    description: {
      type: String,
      required: [true, 'Please provide a description for the quote'],
    },
    totalEstimatedPrice: {
      type: Number,
      min: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'responded', 'closed', 'accepted', 'rejected'],
      default: 'pending',
    },
    sellerResponse: {
      respondedAt: {
        type: Date,
      },
      message: {
        type: String,
      },
      quotedPrice: {
        type: Number,
        min: 0,
      },
      estimatedDelivery: {
        type: String,
      },
      terms: {
        type: String,
      },
      attachments: [
        {
          type: String,
        },
      ],
    },
    customerNotes: {
      type: String,
    },
    urgency: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    preferredContactMethod: {
      type: String,
      enum: ['email', 'phone', 'whatsapp'],
      default: 'email',
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
QuoteSchema.index({ userId: 1, createdAt: -1 });
QuoteSchema.index({ quoteId: 1 });
QuoteSchema.index({ status: 1 });

// Generate quote ID before saving
QuoteSchema.pre('save', async function (next) {
  if (this.isNew && !this.quoteId) {
    const year = new Date().getFullYear();
    const count = await mongoose.model('Quote').countDocuments();
    this.quoteId = `QT-${year}-${String(count + 1).padStart(4, '0')}`;
  }
  next();
});

const Quote: Model<IQuote> = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);

export default Quote;
