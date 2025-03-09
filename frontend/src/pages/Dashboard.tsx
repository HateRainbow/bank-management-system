import { ArrowUpRight, CreditCard, DollarSign, Users } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/";

import { ActivityChart } from "../components/dashboard/activity-chart";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Customers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Accounts
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,782</div>
            <p className="text-xs text-muted-foreground">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Deposits
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.2M</div>
            <p className="text-xs text-muted-foreground">
              +18.7% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Daily Transactions
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">432</div>
            <p className="text-xs text-muted-foreground">
              +4.3% from yesterday
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Transaction Activity</CardTitle>
            <CardDescription>
              Overview of transaction volume over the past 30 days
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ActivityChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Latest transactions across all accounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and operations</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button asChild className="w-full justify-start">
              <Link href="/dashboard/customers/new">
                <Users className="mr-2 h-4 w-4" />
                New Customer
              </Link>
            </Button>
            <Button asChild className="w-full justify-start">
              <Link href="/dashboard/transactions/new">
                <CreditCard className="mr-2 h-4 w-4" />
                New Transaction
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/dashboard/reports">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Generate Reports
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>
              Current system performance and alerts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="performance">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              </TabsList>
              <TabsContent value="performance" className="space-y-4 pt-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Database Response Time</div>
                    <div className="text-sm font-medium">45ms</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">API Response Time</div>
                    <div className="text-sm font-medium">120ms</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">System Uptime</div>
                    <div className="text-sm font-medium">99.98%</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="alerts" className="pt-4">
                <div className="rounded-md bg-muted p-3 text-sm">
                  No critical alerts at this time.
                </div>
              </TabsContent>
              <TabsContent value="maintenance" className="pt-4">
                <div className="rounded-md bg-yellow-100 p-3 text-sm text-yellow-800">
                  Scheduled maintenance: Sunday, 2:00 AM - 4:00 AM
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
