import Me from '../../img/me.jpg'

export default function AboutMeCard() {
  return (
    <div class="hover:scale-105 lg:-mr-32 flex justify-center ">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class=" w-full h-60 md:h-auto object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={Me}
          alt=""
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">About this guy:</h5>
          <p class="text-gray-700 text-base lg:text-lg mb-4">
            Hi! My name is Ivo. I am a developer from Bulgaria, who usually hangs around Copenhagen! 
            I like all things computers, but I mostly like people and I am excited about what tech can do for us!
          </p>
          <p class="text-gray-600 lg:text-xs mt-4">He also likes oisters and beer 🍺 - Cheers!</p>
        </div>
      </div>
    </div>
  );
}
