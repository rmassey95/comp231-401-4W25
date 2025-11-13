import { NextResponse } from "next/server";
import { ENTITY_TYPE } from "@prisma/client";

import { db } from "@/lib/db";
import { DEFAULT_ORG_ID } from "@/lib/constants";

export async function GET(
  request: Request,
  { params }: { params: { cardId: string } }
) {
  try {
    const auditLogs = await db.auditLog.findMany({
      where: {
        orgId: DEFAULT_ORG_ID,
        entityId: params.cardId,
        entityType: ENTITY_TYPE.CARD,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });

    return NextResponse.json(auditLogs);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
