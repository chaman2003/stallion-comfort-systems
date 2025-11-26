'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  FileText,
  Calendar,
  Clock,
  Package,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MessageSquare,
} from 'lucide-react';

interface Quote {
  _id: string;
  quoteId: string;
  userId: string;
  items: {
    productName: string;
    quantity: number;
    specifications?: string;
    notes?: string;
  }[];
  description: string;
  totalEstimatedPrice?: number;
  status: 'pending' | 'responded' | 'closed' | 'accepted' | 'rejected';
  sellerResponse?: {
    respondedAt?: Date;
    message?: string;
    quotedPrice?: number;
    estimatedDelivery?: string;
    terms?: string;
    attachments?: string[];
  };
  urgency?: 'low' | 'medium' | 'high' | 'urgent';
  preferredContactMethod?: 'email' | 'phone' | 'whatsapp';
  createdAt: string;
  updatedAt: string;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export default function QuotationsPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    // Fetch user's quotes
    fetchQuotes(parsedUser._id);
  }, [router]);

  const fetchQuotes = async (userId: string) => {
    try {
      const response = await fetch(`/api/quotes?userId=${userId}`);
      const data = await response.json();

      if (data.success) {
        setQuotes(data.quotes);
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: Quote['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'responded':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'accepted':
        return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'rejected':
        return 'bg-red-500/10 text-red-700 border-red-500/20';
      case 'closed':
        return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
      default:
        return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
    }
  };

  const getStatusIcon = (status: Quote['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'responded':
        return <MessageSquare className="h-4 w-4" />;
      case 'accepted':
        return <CheckCircle2 className="h-4 w-4" />;
      case 'rejected':
        return <XCircle className="h-4 w-4" />;
      case 'closed':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getUrgencyColor = (urgency?: Quote['urgency']) => {
    switch (urgency) {
      case 'urgent':
        return 'bg-red-500/10 text-red-700 border-red-500/20';
      case 'high':
        return 'bg-orange-500/10 text-orange-700 border-orange-500/20';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'low':
        return 'bg-green-500/10 text-green-700 border-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const openQuoteDetails = (quote: Quote) => {
    setSelectedQuote(quote);
    setIsDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 pt-28">
        <div className="animate-pulse space-y-8">
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div className="h-96 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <motion.div
      className="container mx-auto px-4 pt-28 pb-8 max-w-7xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Your Quotes
              </CardTitle>
              <CardDescription className="text-base mt-1">
                View and manage all your quotation requests
              </CardDescription>
            </div>
            <Button onClick={() => router.push('/request-quote')}>
              Request New Quote
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {quotes.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No quotes yet</h3>
              <p className="text-gray-500 mb-6">Start by requesting your first quotation</p>
              <Button onClick={() => router.push('/request-quote')}>
                Request Your First Quote
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {quotes.map((quote) => (
                <Card
                  key={quote._id}
                  className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500/50"
                  onClick={() => openQuoteDetails(quote)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          {quote.quoteId}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(quote.createdAt)}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant="outline"
                          className={`${getStatusColor(quote.status)} flex items-center gap-1`}
                        >
                          {getStatusIcon(quote.status)}
                          <span className="capitalize">{quote.status}</span>
                        </Badge>
                        {quote.urgency && (
                          <Badge variant="outline" className={getUrgencyColor(quote.urgency)}>
                            {quote.urgency.toUpperCase()}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 line-clamp-2">{quote.description}</p>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Package className="h-4 w-4" />
                        <span>{quote.items.length} item{quote.items.length !== 1 ? 's' : ''}</span>
                      </div>
                      {quote.totalEstimatedPrice && (
                        <div className="font-semibold text-gray-900">
                          ₹{quote.totalEstimatedPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                    {quote.sellerResponse?.message && (
                      <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded">
                        <MessageSquare className="h-4 w-4" />
                        <span>Seller has responded</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quote Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <FileText className="h-6 w-6" />
              {selectedQuote?.quoteId}
            </DialogTitle>
            <DialogDescription>
              Quote details and seller response
            </DialogDescription>
          </DialogHeader>
          {selectedQuote && (
            <ScrollArea className="max-h-[70vh] pr-4">
              <div className="space-y-6">
                {/* Status and Date */}
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`${getStatusColor(selectedQuote.status)} flex items-center gap-1 px-4 py-2 text-base`}
                  >
                    {getStatusIcon(selectedQuote.status)}
                    <span className="capitalize">{selectedQuote.status}</span>
                  </Badge>
                  <div className="text-sm text-gray-600 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Requested on {formatDate(selectedQuote.createdAt)}
                  </div>
                </div>

                <Separator />

                {/* Quote Description */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-gray-700">{selectedQuote.description}</p>
                </div>

                {/* Items List */}
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Requested Items ({selectedQuote.items.length})
                  </h3>
                  <div className="space-y-3">
                    {selectedQuote.items.map((item, index) => (
                      <Card key={index} className="bg-gray-50">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.productName}</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Quantity: <span className="font-medium">{item.quantity}</span>
                              </p>
                              {item.specifications && (
                                <p className="text-sm text-gray-600 mt-1">
                                  Specifications: {item.specifications}
                                </p>
                              )}
                              {item.notes && (
                                <p className="text-sm text-gray-500 mt-1 italic">
                                  Notes: {item.notes}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                <div className="grid grid-cols-2 gap-4">
                  {selectedQuote.urgency && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Urgency</h4>
                      <Badge variant="outline" className={getUrgencyColor(selectedQuote.urgency)}>
                        {selectedQuote.urgency.toUpperCase()}
                      </Badge>
                    </div>
                  )}
                  {selectedQuote.preferredContactMethod && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Preferred Contact</h4>
                      <p className="text-gray-900 capitalize">{selectedQuote.preferredContactMethod}</p>
                    </div>
                  )}
                  {selectedQuote.totalEstimatedPrice && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Estimated Price</h4>
                      <p className="text-lg font-bold text-gray-900">
                        ₹{selectedQuote.totalEstimatedPrice.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Seller Response Section */}
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Seller Response
                  </h3>
                  {selectedQuote.sellerResponse?.message ? (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-4 space-y-3">
                        <div>
                          <p className="text-gray-700">{selectedQuote.sellerResponse.message}</p>
                        </div>
                        {selectedQuote.sellerResponse.quotedPrice && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-600 mb-1">Quoted Price</h4>
                            <p className="text-xl font-bold text-blue-700">
                              ₹{selectedQuote.sellerResponse.quotedPrice.toLocaleString()}
                            </p>
                          </div>
                        )}
                        {selectedQuote.sellerResponse.estimatedDelivery && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-600 mb-1">Estimated Delivery</h4>
                            <p className="text-gray-900">{selectedQuote.sellerResponse.estimatedDelivery}</p>
                          </div>
                        )}
                        {selectedQuote.sellerResponse.terms && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-600 mb-1">Terms & Conditions</h4>
                            <p className="text-sm text-gray-700">{selectedQuote.sellerResponse.terms}</p>
                          </div>
                        )}
                        {selectedQuote.sellerResponse.respondedAt && (
                          <div className="text-xs text-gray-500 flex items-center gap-2 pt-2 border-t border-blue-200">
                            <Clock className="h-3 w-3" />
                            Responded on {formatDate(selectedQuote.sellerResponse.respondedAt.toString())}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="bg-yellow-50 border-yellow-200">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-3 text-yellow-800">
                          <AlertCircle className="h-5 w-5" />
                          <div>
                            <p className="font-semibold">Awaiting Seller Response</p>
                            <p className="text-sm text-yellow-700 mt-1">
                              The seller has not responded yet. You will be notified once they provide a quote.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
