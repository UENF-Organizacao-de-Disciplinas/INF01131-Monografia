""" Speech 2 text """

from google.cloud import speech_v1p1beta1 as speech
client = speech.SpeechClient()

audio = speech.RecognitionAudio(uri="gs://YOUR_BUCKET_NAME/YOUR_AUDIO_FILE")
config = speech.RecognitionConfig(
    encoding=speech.RecognitionConfig.AudioEncoding.MP3,
    sample_rate_hertz=16000,
    language_code="pt-BR",
)

response = client.recognize(config=config, audio=audio)

for result in response.results:
    print("Transcript: {}".format(result.alternatives[0].transcript))


