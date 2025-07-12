export default function Loading() {
    return(
        <div className="flex flex-col">
            Loading <p className="animate-bounce">. . .</p>
            <p className="text-xs">If does not load please wait, Github API request are rate limited without a token</p>
        </div>
    );
}