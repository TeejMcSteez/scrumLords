interface GithubData {
    name: string, 
    owner: string
}
/**
 * Fetches repo project information from the Github API
 * @param name - Name of the repo on Github to fetch 
 * @param owner - Name of the owner of the repo on Github to fetch
 * @returns Promise<Any>
 */
export async function getGithubData({name, owner}: GithubData) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${name}`, {
        next: {revalidate: 3600}, // Cache for one hour
    });

    if (!res.ok) throw new Error(`Failed to fetch`);

    return res.json();
}
/**
 * Basic sever component to return Github repo information.
 * @param name - Github name of the repo
 * @param owner - Github username of the owner of the repo
 * @returns <div id="work" className="flex flex-col item-center dark:text-white text-2xl"><h2>{data.name}</h2><p>{data.description}</p><p>Language: {data.language}</p><p><a href={data.git_url}>Clone Me!</a></p></div>
 */
export default async function GithubDataTemplate({name, owner}: GithubData) {
    const data = await getGithubData({name, owner});

    return (
        <div id="work" className="flex flex-col item-center dark:text-white text-2xl">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>Language: {data.language}</p>
            <p>Clone URL: {data.git_url}</p>
        </div>
    );
}