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
      </IonContent>
    </IonPage>
  );
};
export default Demo;
