aws lambda create-function \
--function-name createProfessor \
--runtime nodejs20.x \
--role arn:aws:iam::375423677214:role/LambdaRole \
--handler index.handler \
--zip-file fileb://Files/AWS/lambdas/createProfessor/createProfessor.zip
