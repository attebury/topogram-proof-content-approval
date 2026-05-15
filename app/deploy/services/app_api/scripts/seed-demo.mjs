import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const demoGreetingId = process.env.TOPOGRAM_DEMO_PRIMARY_ID || "33333333-3333-4333-8333-333333333333";
const demoMessage = process.env.TOPOGRAM_DEMO_MESSAGE || "hello-from-topogram";

async function main() {
  const now = new Date();

  await prisma.greeting.upsert({
    where: { id: demoGreetingId },
    update: {
      message: demoMessage,
      created_at: now
    },
    create: {
      id: demoGreetingId,
      message: demoMessage,
      created_at: now
    }
  });

  console.log(JSON.stringify({
    ok: true,
    demoGreetingId,
    seededGreetingCount: 1
  }, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
