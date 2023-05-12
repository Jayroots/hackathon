

import { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import AlbumCards from '../components/AlbumCards';
const supabase = createClient("https://wmtnyelersyjuhxljyge.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtdG55ZWxlcnN5anVoeGxqeWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4ODI1MjcsImV4cCI6MTk5OTQ1ODUyN30.jSfxvoJjZjX6kDZfm0Y3nFVr7cH6MNGX7SFiQJh_-ew");


const CreateAlbum = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data } = await supabase.from("Portail").select();
        setData(data);
    }

    return (

        <main className="CreateAlbum-page">
            <ul className="CreateAlbum-page_ul">
                {data.map((e) => {
                    return (
                        <AlbumCards key={e.id}
                            name={e.name}
                            image={e.image}
                            url={e.url}
                            description={e.description} />
                    )
                })


                }
            </ul>
            {/*        <ul>
        {data.map((data) => (
          <li key={data.name}>{data.name}</li>
        ))}
      </ul> */}
        </main>

    );
};

export default CreateAlbum;