# TypeScript Project

## git-flow

```bash
$ git flow feature start code-signal-arcade
Switched to a new branch 'feature/code-signal-arcade'

Summary of actions:
- A new branch 'feature/code-signal-arcade' was created, based on 'develop'
- You are now on branch 'feature/code-signal-arcade'

Now, start committing on your feature. When done, use:

     git flow feature finish code-signal-arcade

# make a commit and push
$ git push --set-upstream origin feature/code-signal-arcade
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 8 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (8/8), 1.27 KiB | 1.27 MiB/s, done.
Total 8 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'feature/code-signal-arcade' on GitHub by visiting:
remote:      https://github.com/PitPietro/typescript-project/pull/new/feature/code-signal-arcade
remote: 
To https://github.com/PitPietro/typescript-project.git
 * [new branch]      feature/code-signal-arcade -> feature/code-signal-arcade
Branch 'feature/code-signal-arcade' set up to track remote branch 'feature/code-signal-arcade' from 'origin'.
```

## Build the project
```bash
npm run build
```

## Reference
- [Testing TS with Jest](https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421)
- [git-flow to automate git branching workflow](https://jeffkreeftmeijer.com/git-flow/)
