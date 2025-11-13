import { startCase } from "lodash";

export async function generateMetadata() {
  return {
    title: startCase("organization"),
  };
}

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default OrganizationIdLayout;
