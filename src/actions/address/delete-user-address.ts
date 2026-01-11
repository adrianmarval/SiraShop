"use server";

import prisma from "@/lib/prisma";

import { getTranslations } from "next-intl/server";

export const deleteUserAddress = async (userId: string) => {
  const t = await getTranslations("ServerActions");
  try {
    const deleted = await prisma.userAddress.delete({
      where: { userId },
    });

    return { ok: true };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: t("addressDeleteError"),
    };
  }
};
