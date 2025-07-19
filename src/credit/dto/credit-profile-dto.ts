export interface CreditProfileDto {
  totalAccounts: number;
  utilizationRatio: number;
  recentInquiries: number;
  latePayments: number;
  // whatever fields your parser pulls out
}
