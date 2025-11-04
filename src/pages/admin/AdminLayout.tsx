import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';
import Login from './Login'
import { useRoute } from 'wouter'; // Import useRoute

interface AdminLayoutProps { // Remove extends RouteComponentProps
  children?: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [match, params] = useRoute("/admin"); // Use useRoute hook to get route info

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Login />; // Render the Login component
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      <hr />
      {children}
    </div>
  );
};

export default AdminLayout;