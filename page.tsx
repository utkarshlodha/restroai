'use client';

import { Suspense } from 'react';
import { useAuth } from '@clerk/nextjs';
import { RestaurantSelector } from '@/components/dashboard/restaurant-selector';
import { AnalyticsCards } from '@/components/dashboard/analytics-cards';
import { SalesChart } from '@/components/dashboard/sales-chart';
import { OrdersTable } from '@/components/dashboard/orders-table';
import { DashboardSkeleton } from '@/components/dashboard/skeleton';

export default function DashboardPage() {
  const { getToken } = useAuth();

  return (
    <div className="space-y-8">
      <RestaurantSelector />
      
      <Suspense fallback={<DashboardSkeleton />}>
        <div className="space-y-6">
          <AnalyticsCards />
          <SalesChart />
          <OrdersTable />
        </div>
      </Suspense>
    </div>
  );
} 