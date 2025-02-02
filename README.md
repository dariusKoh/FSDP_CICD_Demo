# FSDP_CICD_Demo

Demo Repo to show CI, utilising Git Hooks to call the app
Mani Repo : [https://github.com/dariusKoh/FSDP_Group4](https://github.com/dariusKoh/FSDP_Group4)

## Testing CI

1. Clone this repo (You can use your own repo)
   Repo link: [https://github.com/dariusKoh/FSDP_CICD_Demo](https://github.com/dariusKoh/FSDP_CICD_Demo)
2. Open directory of the cloned repository (C:\FSDP_CICD_Demo)
3. Open the .git folder
4. Open the hooks folder. Your directory should look like: (C:\FSDP_CICD_Demo\\.git\hooks)
5. Rename the file called "pre-push.sample" to "pre-push"
6. Open the file and change the contents to the code in [pre-push](./pre-push)
7. Ensure that pre-push has executable access

```bash
chmod -x C:\FSDP_CICD_Demo\.git\hookspre-push
```

8. Push a commit from the git repository when app.js is running.
