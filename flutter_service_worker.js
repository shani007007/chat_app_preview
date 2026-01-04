'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bda10bd532b24d427a3b40d8a65a90f4",
".git/config": "0f18a5bac7d21a74d4b5c638a000d412",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d5cf53a8f8bf18fd040bb7dc6a58b2d0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "910763048af88150d328e6ac1597bb68",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5626feb5c559ddbccd17801afc91667a",
".git/logs/refs/heads/master": "5626feb5c559ddbccd17801afc91667a",
".git/logs/refs/remotes/origin/HEAD": "e3de6e03a0bdc048885723dd6e28e664",
".git/logs/refs/remotes/origin/master": "199d5ce69c8a4c812c4d6b0c618b1cb2",
".git/objects/00/a541159180a7b4682fd4afee05d65cba1aa3d7": "37034b0a83bbd135ffcae38079e70dfe",
".git/objects/01/96f1d87a866529a6a3be52e3ac878a27f53356": "3e19a69266fc1f3b616f537df7a72542",
".git/objects/01/b10d74c01f3e4cfc972a6a42c01b6ddaacf883": "b110ff88cbb98d1950b928c3e83c11d6",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/09/b2bf6124f2c59f93ccc9f16190aad0b6b1dcad": "2eef54c1b839be455e2f3ace229da4c5",
".git/objects/0c/712da461041973fd9d55d4af9fed4200a06089": "77d091d2dfec9bd6bb48ca071e902b7d",
".git/objects/13/828eaaaba848fdd4a4e658d19019b2e1913614": "8de3f05e7b519124b1f08b86e8db50a1",
".git/objects/1d/6e06fb29167f8d767386634bc2979a003fa44f": "9bcb5aa237735bca82efa78650012427",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/25/3957eaf183fabf43313ff1674de5ce7244f0aa": "929dfd62d493bf3dcf0c8eb7f503fd09",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/33/e82ad73c8e2b2d96d566e32381aeb7e0de7709": "856abf8af69f99a3694a8266f06c7b82",
".git/objects/37/b2dd215e97f5b40589b3e656baa21212d88f6e": "3e3a13755e0b85928d2f7258a1a2f13a",
".git/objects/37/d1febca4da7f771c8a37ef93bbe447e5ef7355": "12b2748e046e1622bfd4448d551c9636",
".git/objects/48/27cc2909a0284503c4dd91118d46a10f1042df": "905f22331bbdfa9f232d098f62d6b370",
".git/objects/4a/d787f3629e2654a1515aa6aa14322a0b2c0c7c": "a47511da081b539204124107b4461475",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/c3b4c3320dc8f5e69d9b1a5d51c150d080f14a": "5bd3da969bcb963a68f68db8a326c4d8",
".git/objects/5b/bd848e117f196d9f1d118329a8f812a27cadd4": "4d08b47d2db7fb54764da334c3f6b749",
".git/objects/5d/6f09b611cc16e97af9b51b43341adbd09b0f45": "e30c6295de718fffb650637e29ff5750",
".git/objects/69/638ee3f63f21fae72eeb124146b89a0a8f6721": "3d862e94e003100771aed21fcb520ad0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/76/cced87d64a6319d1dfa397b2352fb9804ba811": "c7e050cce5a423152604ab2cc471eb14",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/9e6b8b59ba7c5584d87376e700b359e529e3ef": "cd653efac12131a391cc6d1e5efc56c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d2f60546484d9871715f38a961c8e6741f22be": "e1b9ccccdb08892b43e3407f55694d89",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/00c8e0a534b31a2ce7a6c6c71f557be6fc08f5": "5c7f7e18a30aebdec38ee59c58ae0b20",
".git/objects/91/225c697b16d296870a5f6fd26f05cc8484f117": "056d041aad8e4e1271502151c66b55e6",
".git/objects/91/d7184b2253b4d9b096c977e2ac2d6e5f94822d": "4cfed101cfd7151b384e7c1de333fae3",
".git/objects/94/826728160b67f0974824c086c2d9f9f4a75a9e": "23f7269b04df99af8dbe618058d8d255",
".git/objects/96/2d9c8559f16fd2bfc9097fd76af2f65d3c5008": "056aee5c506d368384c2d1d93f3e86f4",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/5ab6fdfcadb985f74f8c89322b6782d2b76c60": "067dad9a7bfeed27927921b8daa2e8cf",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/1fdbe9ee919552bca78fd28ff24e1d76ba655d": "cfedacbf39a63060e79467364000dc94",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/6f76683ac7b17b5f35dc65da92ea7127412e32": "0071141690b48ee19b114feb0ad60cce",
".git/objects/aa/7e1f5f1a9f933f1a72a6b2103496766086ad87": "e1a6a35950266e64f512e75d92a06436",
".git/objects/ab/e23ec1d507e0a8c8027c468089b17e540d569f": "b2b59fe899f9832ed71507a89ba20556",
".git/objects/b0/6f4394b25449dfedc65be3085cb5c849571c97": "aebf56a948df706ec441d28e67617a72",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/24d50b77b3d3ac93f9774f7bd3e65f81e142b3": "ecc55647436a6239215a4664523da72f",
".git/objects/bf/9f6baf366f37ff2f3669ab9ddff32fc82ed811": "708181dcc893f921c4b8e7dce46277fa",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/c22a35f6be3463b2a0aac217cc94037817576b": "2025d51e53cdbb8e2ebfaa750c988087",
".git/objects/c8/926ab0a64703e86b3a0dd405019c3670a9257e": "5135e40b3e07d01fb699750cfad7aab7",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/50f668cbf43c7e7e9b3570f578d4dcdc3989f0": "3fe687e0ba72c3d5a759a50cf091d7c6",
".git/objects/d0/8b9368bdffffe1a092d3f01b91b8a740ce5f2f": "202d1042464c063ce41d9b8841f7756d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/0b83066222ae536e3362274292f0c17bd65f76": "c94ebc936c53508c1e6d01ba0e0850a7",
".git/objects/df/1a1990993509e2ec5acf1cb74d5336374d0e4a": "a12f6515d2fce1bcee0b1af34b17298e",
".git/objects/df/5d6a7d584610ad168950b76bfa0f0414743e19": "702530b5493ccb3f071436a84ccdf1d7",
".git/objects/e0/5632f0202e3a0be796a302836359e2eb2f4cf3": "208fed72c6b43f5badee8f2015301c5b",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/148df683ee7e683ba8d09986b26c1be3afd32c": "6aed7922bc87f59a3f90f6fa4d9d1927",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/d990a6b4a972cc2a0a4df30efc171244d37fe2": "404db3c3f07afc16a33b1b586b253d95",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/0387589a2ffabc0bd216c4f34f13b2c07b4e8e": "6cd8a4fba7b919b41d6baf913f5f3336",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/412123a6b493945d85420c3d33f8a7a0fbc6ec": "7ec093ffdc8f00f748366c5cb73fd2a9",
".git/objects/f9/c554e5d131e4e1c9d320bd1c98210e78e4eabd": "f00d7a939830fcc7f369012d85fc03ad",
".git/objects/f9/cc98dd48cf0268021ba7e44054cfcb3e54622e": "2c72602b77c47437b397ec92fb2c78b2",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/master": "62c5d307ba6c5f41a340ddd3e50f7724",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "62c5d307ba6c5f41a340ddd3e50f7724",
"assets/AssetManifest.bin": "e77317d86455b7b607181b4d51eb6fde",
"assets/AssetManifest.bin.json": "f8a0556f4af15d16440051cc1c789a5e",
"assets/AssetManifest.json": "12bd07504c7947d1d6b63b979f598fc6",
"assets/assets/1.jpg": "9acc8374d9c4bd052330b18cf270ce36",
"assets/assets/10.jpg": "aea00a0bc3254cd73ab41a85ed8487ef",
"assets/assets/11.jpg": "960e1f12212b1f3e95a1fda8fdfe605a",
"assets/assets/12.jpg": "eec63a739c17ebe8e4909f2e67104aa3",
"assets/assets/13.jpg": "edc766a99037640a05c97dbc1d692b85",
"assets/assets/2.jpg": "5942c5343e30068ef117f72f9b907870",
"assets/assets/3.jpg": "604e3b08846f4cbc4acf65a499a71636",
"assets/assets/4.jpg": "9e0e276529364bdd9d5bebac6180580c",
"assets/assets/5.jpg": "bf245419a0a9a3dbe1ee5a8a634218c9",
"assets/assets/6.jpg": "ac34190d1915b042ea12fc4f08311d9e",
"assets/assets/7.jpg": "1dc128797b3e29c1dda4b6977f6cd53b",
"assets/assets/8.jpg": "9bab6e56b3be1cefd207cd1ea1f42ed6",
"assets/assets/9.jpg": "3af9a2b71635db46555ddaf0fafc5562",
"assets/assets/current.png": "4c84e94b0c4b9e417cd996a86cbe8f1c",
"assets/assets/cut.png": "7507da16c64c740776c466f2c080effa",
"assets/assets/maximize.png": "8ffddc2c59f9e49754b314798a7075ff",
"assets/assets/send%2520message.png": "22dca46546e816a24bd20948dbba3610",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "60ce494f88e55d5b4c099ef6dd3b21f1",
"assets/NOTICES": "5d8a1b751adc48a535da0803e875d7e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "6a71516e62045b7fd91f3ae3bdbabee5",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "0dd46696ec49943cada1eb0be4ce5e8a",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "9ca9891410fe1cb7ecc5867c044c1ed6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "30419afa282cc316cf04febc9076acd5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "566840e433aee6c50bafcd33469958be",
"/": "566840e433aee6c50bafcd33469958be",
"main.dart.js": "987929dec54c35f9a82219ba758462e5",
"manifest.json": "c7a8d3dc066de3bb07cdf0bf144da474",
"version.json": "9b61f7062b795a48727e7e519acd0353"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
