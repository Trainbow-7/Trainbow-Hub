import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main() {
  const reqs = await prisma.tutorRequest.findMany({
    include: {
      proposals: {
        include: {
          tutor: {
            include: { user: true }
          }
        }
      }
    }
  });
  console.log("Found requests:", reqs.length);
  for (const r of reqs) {
    console.log(`\n--- Request: ${r.reference} [${r.status}] ---`);
    console.log(`Student: ${r.studentName}, Subject: ${r.subject}, Tier: ${r.tier}`);
    console.log(`Proposals (${r.proposals.length}):`);
    for (const p of r.proposals) {
      console.log(`  - Proposal ID: ${p.id}, Status: ${p.status}, Tutor: ${p.tutor.user.fullName}, Rate: ${p.hourlyRate}`);
    }
  }
  await prisma.$disconnect();
}

main().catch(console.error);
