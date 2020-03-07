npm run build
aws --profile perso s3 rm --recursive s3://www.jandj2020.wedding/ 
aws --profile perso s3 sync ./dist s3://www.jandj2020.wedding/ 