import { PrivacyContent, privacySections } from "./PrivacyContent";
import { PageHeader } from "~/components/PageHeader";
import { TableOfContents } from "~/components/TableOfContents";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Privacy Policy"
        desc="We take your privacy seriously. This policy explains how we collect,
            use, and protect your personal information."
      />
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <PrivacyContent />
          <TableOfContents sections={privacySections} />
        </div>
      </div>
    </div>
  );
}
