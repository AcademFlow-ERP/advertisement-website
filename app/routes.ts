import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.route.tsx"),
    route("core-school-management-solution", "routes/coreSchoolManagementSolution.route.tsx"),
    route("fee-payments-and-management-solution","routes/feePaymentManagementSolution.route.tsx"),
    route("academic-result-report-solution", "routes/academicResultReportSolution.route.tsx"),
    route("communication-book", "routes/communicationBook.route.tsx")
] satisfies RouteConfig;
