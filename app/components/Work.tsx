"use client";

import { Suspense } from "react"
import GithubDataTemplate from "./GithubApi"

export default function Work() {
    return(
        <Suspense>
            <GithubDataTemplate name="scrumLords" owner="TeejMcSteez"/>
        </Suspense>
    );
}