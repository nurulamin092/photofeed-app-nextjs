import PhotosDetails from "@/components/PhotosDetails";

const PhotosDetailsPage = ({ params: { id, lang } }) => {
    return (
        <>
            <PhotosDetails id={id} lang={lang} />
        </>
    );
};

export default PhotosDetailsPage;