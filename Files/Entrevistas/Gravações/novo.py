import os

from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech

# Instantiates a client
client = SpeechClient()

# The output path of the transcription result.
workspace = "gs://bucket-tcc-speech_2_text/transcripts"

# The name of the audio file to transcribe:
gcs_uri = "gs://bucket-tcc-speech_2_text/audio-files/2023-09-01 15.12.02 - Responsável pela Secretaria Acadêmica - Gustavo.mp3"

# Recognizer resource name:
name = "projects/watchful-augury-401115/locations/us-central1/recognizers/_"

config = cloud_speech.RecognitionConfig(
  auto_decoding_config={},
  model="chirp",
  language_codes=["pt-BR"],
  features=cloud_speech.RecognitionFeatures(
  enable_word_time_offsets=True,
  enable_automatic_punctuation=True,
  ),
)

output_config = cloud_speech.RecognitionOutputConfig(
  gcs_output_config=cloud_speech.GcsOutputConfig(
    uri=workspace),
)

files = [cloud_speech.BatchRecognizeFileMetadata(
    uri=gcs_uri
)]

request = cloud_speech.BatchRecognizeRequest(
    recognizer=name, config=config, files=files, recognition_output_config=output_config
)
operation = client.batch_recognize(request=request)
print(operation.result())