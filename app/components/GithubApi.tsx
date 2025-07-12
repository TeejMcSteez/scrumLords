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
        <div>
            <h2>{data.full_name}</h2>
            <p>{data.description}</p>
        </div>
    );
}