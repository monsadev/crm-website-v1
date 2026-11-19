import { BookDemoContent } from '@/components/sections/demo/BookDemoContent';

export const metadata = {
  title: 'Book a Demo',
  description: 'Book a free, personalised 30 minute demo of WsCube CRM. Pick the modules you care about and a time that suits you.',
  alternates: { canonical: '/book-demo' },
};

export default function BookDemoPage() {
  return <BookDemoContent />;
}
