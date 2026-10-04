const { initializeApp, cert } = require('firebase-admin/app');
const { getMessaging } = require('firebase-admin/messaging');

// Load credentials from GitHub Secret environment variable
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

initializeApp({
  credential: cert(serviceAccount)
});

const announcementTexts = {
  cyr: {
    title: "Kabasti-NS Обавештење",
    body: process.env.CYR_BODY || "Објављен је нови план одвожења кабастог отпада!"
  },

  default: {
    title: "Kabasti-NS Обавештење",
    body: process.env.CYR_BODY || "Објављен је нови план одвожења кабастог отпада!"
  },

  sr: {
    title: "Kabasti-NS Obaveštenje",
    body: process.env.SR_BODY || "Objavljen je novi plan odvoženja kabastog otpada!"
  },

  en: {
    title: "Kabasti-NS Notification",
    body: process.env.EN_BODY || "A new schedule for bulky waste removal has been announced!"
  },

  sk: {
    title: "Kabasti-NS Oznámenie",
    body: process.env.SK_BODY || "Bol uverejnený nový harmonogram zvozu objemného odpadu!"
  },

  hu: {
    title: "Kabasti-NS Bejelentés",
    body: process.env.HU_BODY || "Új tervet jelentettek be a nagyméretű hulladék elszállítására!"
  }
};

async function sendBroadcasts() {
  for (const [lang, text] of Object.entries(announcementTexts)) {
    const message = {
      topic: `NS-announcements_${lang}`,
      fcmOptions: { analyticsLabel: `NS-broadcast-${lang}`},
      notification: { title: text.title, body: text.body },
      data: { type: 'ns-announcement' },
      android: { priority: 'normal', ttl: 172800, notification: { channelId: 'ns-announcements', icon: 'ann_icon', sound: 'ann_sound.mp3' } }
    };

    try {
      await getMessaging().send(message);
      console.log(`[GitHub Action] Success! Sent to topic NS-announcements_${lang}`);
    } catch (err) {
      console.error(`[GitHub Action] Error! Failed sending to topic NS-announcements_${lang}:`, err);
    }
  }
  process.exit(0);
}

sendBroadcasts();
