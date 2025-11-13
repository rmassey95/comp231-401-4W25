"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { DEFAULT_ORG_ID } from "@/lib/constants";

import { DeleteBoard } from "./schema";
import { InputType, ReturnType } from "./types";

import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { id } = data;
  let board;

  try {
    board = await db.board.delete({
      where: {
        id,
        orgId: DEFAULT_ORG_ID,
      },
    });

    await createAuditLog({
      entityTitle: board.title,
      entityId: board.id,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.DELETE,
    });
  } catch (error) {
    return {
      error: "Failed to delete.",
    };
  }

  revalidatePath(`/organization/${DEFAULT_ORG_ID}`);
  redirect(`/organization/${DEFAULT_ORG_ID}`);
};

export const deleteBoard = createSafeAction(DeleteBoard, handler);
