// import { redirect } from 'next/navigation';

// import { getServerSession } from 'next-auth';

// import { authOptions } from 'app/api/auth/[...nextauth]/route';

export default async function DashboardPage() {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect('/auth/signin');
  // }

  return (
    <div>
      <h1>
        Добро пожаловать
        {/* , {session.user?.email} */}
      </h1>
    </div>
  );
}
