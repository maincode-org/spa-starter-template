import {
  IonButtons,
  IonButton,
  IonCheckbox,
  IonItem,
  IonChip,
  IonLabel,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { Button } from '@material-ui/core';
import ArticlePreview from "../components/article-preview/ArticlePreview";

const Demo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Demo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="page-padding">
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <p>Paragraph</p>
          <IonButton color="primary">Primary</IonButton>
          <IonButton color="secondary">Secondary</IonButton>
          <IonButton color="tertiary">Tertiary</IonButton>
          <IonButton color="success">Success</IonButton>
          <IonButton color="warning">Warning</IonButton>
          <IonButton color="danger">Danger</IonButton>
          <IonButton color="light">Light</IonButton>
          <IonButton color="medium">Medium</IonButton>
          <IonButton color="dark">Dark</IonButton>
          <IonButton color="primary" strong={true}>
            Strong
          </IonButton>
          <IonButton color="primary" fill="outline">
            Outline
          </IonButton>
          <IonButton color="primary" fill="clear">
            Clear
          </IonButton>
          <IonCheckbox color="primary" />
          <div className="w-40">
            <IonItem>
              <IonLabel>isActive</IonLabel>
              <IonCheckbox value="isActive" />
            </IonItem>
            <IonItem>
              <IonLabel>isFloatyBoy</IonLabel>
              <IonCheckbox value="isFloatyBoy" />
            </IonItem>
            <IonItem>
              <IonLabel>isFlexible</IonLabel>
              <IonCheckbox value="isFlexible" />
            </IonItem>
          </div>
          <IonChip color="primary">
            <IonLabel>Tag</IonLabel>
          </IonChip>

          <IonGrid>
            <IonRow>
              <IonCol size="6" size-md="2">
                <IonContent color="primary">Primary</IonContent>1
              </IonCol>
              <IonCol size="6" size-md="2">
                <IonContent color="secondary">Secondary</IonContent>1
              </IonCol>
              <IonCol size="6" size-md="2">
                <IonContent color="tertiary">Tertiary</IonContent>1
              </IonCol>
              <IonCol size="6" size-md="2">
                <IonContent color="light">Light</IonContent>1
              </IonCol>
              <IonCol size="6" size-md="2">
                <IonContent color="medium">Medium</IonContent>1
              </IonCol>
              <IonCol size="6" size-md="2">
                <IonContent color="dark">Dark</IonContent>1
              </IonCol>
            </IonRow>
          </IonGrid>

          <br/><br/>
          <Button color="primary">MUI Primary</Button>
          <Button color="secondary">MUI Secondary</Button>

          <br/><br/>
          <ArticlePreview
              title="Long walks on the beach"
              summary="Long walks on the beach is an article written by the awardwinning author Lord Farquaad. He says some really cool stuff, about the love of his life, Fiona."
          />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Demo;
