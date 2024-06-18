const path = require("path");
const { Storage } = require('@google-cloud/storage');

const serviceAccountKeyPath = path.resolve(__dirname, "../serviceaccountkey.json");

const storage = new Storage({ 
  projectId: "wira-wicara",
  keyFilename: serviceAccountKeyPath,
});
const getSequentialAudio = async (req, res, next) => {
  try {
    const bucketName = "wira-voices";
    const bucketWiraVoices = storage.bucket(bucketName);
    const files = await bucketWiraVoices.getFiles({ prefix: "audio/" });

    res.setHeader('Content-Type', 'audio/wav');

    for (const file of files[0]) {
      if (file.name.endsWith(".wav")) {
        const stream = file.createReadStream();
        await new Promise((resolve, reject) => {
          stream.on("end", resolve);
          stream.on("error", reject);
          stream.pipe(res, { end: false });
        });
      }
    }

    res.end();
  } catch (error) {
    next(error);
  }
};

module.exports = {getSequentialAudio};