npm run build
# aws s3 rm --recursive s3://www.jandj2020.wedding/ 
aws s3 sync ./dist s3://www.jandj2020.wedding/ 