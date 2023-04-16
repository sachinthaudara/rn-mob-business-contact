echo "\n\033[1;34m removing react native global cache...\033[0m\n"
if [ -e ~/.rncache ]
then
    rm -rf ~/.rncache
fi
echo "\n\033[1;32m Successfully removed the react native global cache 🎉 🥳 \033[0m\n"

echo "\n\033[1;34m node_modules rehydrate starting...\033[0m\n"
rm -rf node_modules && yarn install
echo "\n\033[1;32m Successfully cleared and reinstalled node_modules 🎉 🥳 \033[0m\n"
echo "\n\033[1;34m node_modules rehydrate finished. \033[0m\n"

echo "\n\033[1;34m iOS rehydrate starting...\033[0m\n"

rm -rf ~/Library/Developer/Xcode/DerivedData

echo "\n\033[1;32m Successfully cleared Derive data folder 🎉 🥳 \033[0m\n"

cd ./ios && rm -rf Pods && pod install

echo "\n\033[1;32m Successfully removed Pods folder and reinstalled pods 🎉 🥳 \033[0m\n"
echo "\n\033[1;34m iOS rehydrate finished. \033[0m\n"

echo "\n\033[1;34m Android rehydrate staring... \033[0m\n"

cd ../android && ./gradlew --stop && rm -rf build && rm -rf .gradle

echo "\n\033[1;32m Successfully removed gradle build 🎉 🥳 \033[0m\n"

cd ./app && rm -rf build && rm -rf release

echo "\n\033[1;32m Successfully removed app build and release folders 🎉 🥳 \033[0m\n"
echo "\n\033[1;34m Android rehydrate finished. \033[0m\n"