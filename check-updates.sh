export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

while true; do
    if git pull | grep -q 'Already up to date.'; then
        echo "Not git updates to pull"
    else
        echo "Git updates pulled. Proceeding with updates and restart"
        yarn install
	yarn build
    yarn pm2 restart landing-ui
    fi
    sleep 300 # Sleep for 5 minutes
done
