export async function getGithubData(name: string, owner: string) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${name}`, {
        next: {revalidate: 3600}, // Cache for one hour
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}

export default async function GithubDataTemplate({owner, name}: {name: string, owner: string}) {
    const data = await getGithubData(name, owner);

    return (
        <div id="work" className="flex flex-col item-center dark:text-white text-2xl">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>Language: {data.language}</p>
            <p><a href={data.git_url}>Clone Me!</a></p>
        </div>
    );
}