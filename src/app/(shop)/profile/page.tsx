import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case "admin":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "user":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
};

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Shield } from "lucide-react";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const user = session.user;

  return (
    <main className="mt-10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card principal */}
        <Card>
          <CardHeader className="flex flex-col items-center p-4">
            <CardTitle>
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg dark:border-slate-700">
                <AvatarImage src={user.image || ""} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-2xl font-bold text-white">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
            </CardTitle>
            <CardDescription>
              <div className="text-center">
                <h1 className="mb-2 text-3xl font-bold text-foreground">{user.name}</h1>
                <Badge className={`${getRoleBadgeColor(user.role)} text-sm capitalize`}>{user.role}</Badge>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 px-8 py-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <Mail size={16} />
                  <span>Email</span>
                </div>
                <p className="break-all text-foreground">{user.email}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <Shield size={16} />
                  <span>Verificación</span>
                </div>
                <p className="text-sm">
                  {user.emailVerified ? (
                    <span className="font-medium text-green-600 dark:text-green-400">✓ Email verificado</span>
                  ) : (
                    <span className="font-medium text-amber-600 dark:text-amber-400">Pendiente de verificación</span>
                  )}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-2">
            <p className="text-center text-xs text-muted-foreground">Perfil seguro • Datos protegidos</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
