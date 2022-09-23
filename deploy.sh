# echo "Building app..."
# npm run build

echo "Deploying to server ... "
scp -r build/* twixt@80.85.84.93:/home/twixt/

echo "Done!"