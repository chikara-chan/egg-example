pipeline {
    agent {
        docker {
            image 'node:carbon' 
            args '--link mysql-container:mysql'
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