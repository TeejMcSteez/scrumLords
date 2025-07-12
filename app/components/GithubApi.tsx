export async function getGithubData() {
    const res = await fetch('https://api.github.com/repos/TeejMcSteez/scrumLords', {
        next: {revalidate: 3600}, // Cache for one hour
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}

export default async function GithubDataTemplate() {
    const data = await getGithubData();

    return (
        <div id="work" className="flex flex-col item-center dark:text-white text-2xl">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>Language: {data.language}</p>
            <p><a href={data.git_url}>Clone Me!</a></p>
        </div>
    );
}