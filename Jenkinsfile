pipeline{
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }
           stage('Install Node.js and npm') {
            steps {
                sh 'npm install'
            }
        }
         stage('Build') {
            steps {
                // Your build steps using npm
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}