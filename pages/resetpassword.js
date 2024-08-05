import Layout from "@/components/layout/Layout";
import ResetPassword from "@/components/user/ResetPassword";
import { isAuthenticatedUser } from "@/utils/isAuthenticated";

export default function ResetPasswordPage() {
  return (
    <Layout title="Reset Password">
      <ResetPassword />
    </Layout>
  );
}
