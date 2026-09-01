export interface ReportType {
  id: number;
  title: string;
  description: string;
  frequency: string;
}

export interface ReportHistoryItem {
  id: number;
  name: string;
  format: "PDF" | "CSV";
  date: string;
  status: "Ready" | "Processing";
}

export interface ScheduledReport {
  id: number;
  name: string;
  schedule: string;
  recipients: string;
}

export interface ReportFilterOption {
  label: string;
  value: string;
}

export interface ReportBuilderData {
  datasets: ReportFilterOption[];
  dateRanges: ReportFilterOption[];
  groupBy: ReportFilterOption[];
  metrics: ReportFilterOption[];
  formats: ReportFilterOption[];
}
