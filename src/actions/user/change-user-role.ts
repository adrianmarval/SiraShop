"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { getTranslations } from "next-intl/server";

export const changeUserRole = async (userId: string, role: string) => {
  const session = await auth();
  const t = await getTranslations("ServerActions");

  if (session?.user.role !== "admin") {
    return {
      ok: false,
      message: t("adminRequired"),
    };
  }

  try {
    const newRole = role === "admin" ? "admin" : "user";

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: newRole,
      },
    });

    revalidatePath("/admin/users");

    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: t("roleUpdateError"),
    };
  }
};
