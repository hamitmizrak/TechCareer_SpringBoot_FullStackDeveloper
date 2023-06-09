# Dockerfile

FROM openjdk:17
ARG JAR_FILE_PATH=TechCareer_FullStackDeveloper-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE_PATH} blog.jar
ENTRYPOINT ["java","-jar","/blog.jar"]
#EXPOSE 2222 9999
#CMD ["cmd 1"]