import { friends, getFriendBySlug, } from '../../data/friends'
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'
import BackButton from '../../../components/ui/backButton';
import { Friend } from '../../models/friend';

  export async function generateStaticParams() {
    return friends.map((friend: Friend) => ({
      slug: friend.slug,
    }));
  }

export default async function TicketPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

  const friend = getFriendBySlug(String(slug))

  if (!friend) {
    return <div className="p-10 text-center text-xl">Amigo no encontrado 😢</div>
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Avatar className="h-32 w-32 mb-4 border-2 border-blue-100">
        <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
        <AvatarFallback className="text-lg">{friend.name.charAt(0)}</AvatarFallback>
      </Avatar>

        
      <h1 className="text-2xl font-bold mb-2">{friend.name}</h1>

      {
        friend.ticket ? (
            <a
            href={friend.ticket}
            download
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700 transition"
          >
            📥 Descargar Ticket
          </a>
        ) : (
            <p className="mt-4 text-gray-500">Se cagó todo y no tiene ticket 😢</p>
        )
      }
     

      <BackButton />
    </div>
  )
}

export const dynamic = 'force-static'; // Fuerza renderizado estático
export const revalidate = false; // Desactiva revalidación incremental
