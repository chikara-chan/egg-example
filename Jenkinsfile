pipeline {
    agent {
        docker {
            image 'node:carbon' 
        }
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'ls -al /var/jenkins_home'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}