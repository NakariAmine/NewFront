"use client";
import { useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  HStack,
  Box,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Select,
  VStack,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"; // Import the DeleteIcon
import { IconButton } from "@chakra-ui/react"; // Import the IconButton

const Calendar = () => {
  interface Item {
    itemId: number;
    name: string;
    category: string;
    quantity: number;
    description: string;
    image: string;
    selectedQuantity?: number;
    totalSelectedQuantity?: number;
    famille?:string;
    sousfamille?:string;
  }

  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook to manage drawer state

  const mockItems: Item[] = [
    {
      itemId: 1,
      name: "Ordinateur Portable",
      category: "Informatique",
      famille: "Électronique",
      sousfamille: "Ordinateurs",
      quantity: 50,
      description: "Un ordinateur portable haute performance pour tous vos besoins informatiques.",
      image: "laptop.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 2,
      name: "Chaise de Bureau",
      category: "Moyens Generaux",
      famille: "Mobilier",
      sousfamille: "Chaises",
      quantity: 30,
      description: "Chaise de bureau ergonomique avec soutien lombaire.",
      image: "office-chair.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 3,
      name: "Souris Sans Fil",
      category: "Informatique",
      famille: "Périphériques",
      sousfamille: "Souris",
      quantity: 100,
      description: "Une souris sans fil fluide et réactive.",
      image: "wireless-mouse.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 4,
      name: "Cahier",
      category: "Moyens Generaux",
      famille: "Papeterie",
      sousfamille: "Cahiers",
      quantity: 200,
      description: "Un ensemble de 5 cahiers à lignes.",
      image: "notebook.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 5,
      name: "Lampe de Bureau",
      category: "Moyens Generaux",
      famille: "Mobilier",
      sousfamille: "Tables",
      quantity: 60,
      description: "Lampe de bureau LED avec luminosité réglable.",
      image: "desk-lamp.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 6,
      name: "Projecteur",
      category: "Informatique",
      famille: "Électronique",
      sousfamille: "Projecteurs",
      quantity: 20,
      description: "Projecteur HD pour présentations et films.",
      image: "projector.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 7,
      name: "Clavier Mécanique",
      category: "Informatique",
      famille: "Périphériques",
      sousfamille: "Claviers",
      quantity: 75,
      description: "Clavier mécanique avec rétroéclairage RGB.",
      image: "keyboard.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 8,
      name: "Imprimante Multifonction",
      category: "Informatique",
      famille: "Électronique",
      sousfamille: "Ordinateurs",
      quantity: 15,
      description: "Imprimante multifonction avec scanner intégré.",
      image: "printer.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 9,
      name: "Armoire de Rangement",
      category: "Moyens Generaux",
      famille: "Mobilier",
      sousfamille: "Tables",
      quantity: 25,
      description: "Armoire de rangement en métal avec serrure.",
      image: "storage-cabinet.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 10,
      name: "Stylo à Bille",
      category: "Moyens Generaux",
      famille: "Papeterie",
      sousfamille: "Stylos",
      quantity: 500,
      description: "Un ensemble de 10 stylos à bille noirs.",
      image: "pen.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 11,
      name: "Table de Réunion",
      category: "Moyens Generaux",
      famille: "Mobilier",
      sousfamille: "Tables",
      quantity: 10,
      description: "Table de réunion en bois pour 8 personnes.",
      image: "conference-table.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 12,
      name: "Téléphone de Bureau",
      category: "Informatique",
      famille: "Périphériques",
      sousfamille: "Souris",
      quantity: 40,
      description: "Téléphone de bureau avec affichage numérique.",
      image: "office-phone.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
  ];
  

  const [items, setItems] = useState<Item[]>(mockItems);

  const incrementQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId && item.selectedQuantity! < item.quantity) {
          const updatedItem = { ...item, selectedQuantity: (item.selectedQuantity || 0) + 1 };
          console.log(`Incremented: ${updatedItem.name}, Selected Quantity: ${updatedItem.selectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  };

  const setTotalQuantityToZero = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.itemId === itemId
          ? { ...item, totalSelectedQuantity: 0 }
          : item
      )
    );
  };
  
  const decrementQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId && (item.selectedQuantity || 0) > 0) {
          const updatedItem = { ...item, selectedQuantity: (item.selectedQuantity || 0) - 1 };
          console.log(`Decremented: ${updatedItem.name}, Selected Quantity: ${updatedItem.selectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  };

  const decrementTotalQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId && (item.totalSelectedQuantity || 0) > 0) {
          const updatedItem = { ...item, totalSelectedQuantity: (item.totalSelectedQuantity || 0) - 1 };
          console.log(`Decremented: ${updatedItem.name}, Total Selected Quantity: ${updatedItem.totalSelectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  }

  const incrementTotalQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId && item.totalSelectedQuantity! < item.quantity) {
          const updatedItem = { ...item, totalSelectedQuantity: (item.totalSelectedQuantity || 0) + 1 };
          console.log(`Incremented: ${updatedItem.name}, Total Selected Quantity: ${updatedItem.totalSelectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  }

  const addToCart = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId) {
          const updatedItem = { ...item, totalSelectedQuantity: (item.totalSelectedQuantity || 0) + (item.selectedQuantity || 0) };
          console.log(`Added to cart: ${updatedItem.name}, Total Selected Quantity: ${updatedItem.totalSelectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  } 

  const selectedItems = items.filter(item => item.selectedQuantity! > 0);

  const categories = ["Moyens Generaux", "Informatique"];
  const families = [ "Mobilier", "Papeterie","Électronique", "Périphériques"];

  const subFamilies = ["Chaises", "Tables", "Stylos", "Cahiers","Ordinateurs", "Projecteurs", "Souris", "Claviers" ];
 


const [selectedSubFamily, setSelectedSubFamily] = useState<string | undefined>(undefined);
const [selectedFamily, setSelectedFamily] = useState<string | undefined>(undefined);
const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

return (
  <div className="mx-auto max-w-7xl" style={{ position: 'relative' }}>
    <Breadcrumb pageName="Creer une nouvelle demande" />

    <HStack spacing={4} align="stretch" mb={4}>
      <VStack align="start">
        <Heading size="small">Categorie:</Heading>
        <Select placeholder="" onChange={(e) => setSelectedCategory(e.target.value)} size="sm" width="200px">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </VStack>
      <VStack align="start">
        <Heading size="small">Famille:</Heading>
        <Select placeholder="" onChange={(e) => setSelectedFamily(e.target.value)} size="sm" width="200px">
          {families.map((family, index) => (
            <option key={index} value={family}>
              {family}
            </option>
          ))}
        </Select>
      </VStack>
      <VStack align="start">
        <Heading size="small">Sous-Famille:</Heading>
        <Select placeholder="" onChange={(e) => setSelectedSubFamily(e.target.value)} size="sm" width="200px">
          {subFamilies.map((subFamily, index) => (
            <option key={index} value={subFamily}>
              {subFamily}
            </option>
          ))}
        </Select>
      </VStack>
      <Box >
        <Button onClick={()=> console.log("hamid")} size="sm" top="30px">
          Rechercher
        </Button>
      </Box>
    </HStack>

    <Box position="absolute" top="10px" right="10px">
      <Button onClick={onOpen} size="sm">
        Afficher les articles sélectionnés
      </Button>
    </Box>

    <TableContainer>
      <Table variant="simple">
        <TableCaption>Articles disponibles pour la demande</TableCaption>
        <Thead>
          <Tr>
            <Th>Nom</Th>
            <Th>Description</Th>
            <Th>Quantité</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <Tr key={item.itemId}>
              <Td>{item.name}</Td>
              <Td>{item.description}</Td>
              <Td>
                <HStack spacing={4}>
                  <Button
                    onClick={() => decrementQuantity(item.itemId)}
                    size="sm"
                  >
                    -
                  </Button>
                  <span>{item.selectedQuantity}</span>
                  <Button
                    onClick={() => incrementQuantity(item.itemId)}
                    size="sm"
                  >
                    +
                  </Button>
                </HStack>
              </Td>
              <Td>
                <Button
                  onClick={() => addToCart(item.itemId)}
                  size="sm"
                >
                  Ajouter
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>

    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Articles sélectionnés</DrawerHeader>
      <DrawerBody>
        {selectedItems.filter(item => item.totalSelectedQuantity! > 0).length > 0 ? (
        <TableContainer>
          <Table variant="simple">
          <Thead>
            <Tr>
            <Th>Nom</Th>
            <Th>Quantité Totale</Th>
            </Tr>
          </Thead>
          <Tbody>
            {selectedItems.filter(item => item.totalSelectedQuantity! > 0).map((item) => (
            <Tr key={item.itemId}>
              <Td>{item.name}</Td>
              <Td>
              <HStack spacing={4} justifyContent="space-between">
                <HStack spacing={4}>
                <Button
                  onClick={() => decrementTotalQuantity(item.itemId)}
                  size="sm"
                >
                  -
                </Button>
                <span>{item.totalSelectedQuantity}</span>
                <Button
                  onClick={() => incrementTotalQuantity(item.itemId)}
                  size="sm"
                >
                  +
                </Button>
                </HStack>
                <IconButton
                aria-label="Remove item"
                icon={<DeleteIcon />}
                size="sm"
                onClick={() => setTotalQuantityToZero(item.itemId)}
                />
              </HStack>
              </Td>
            </Tr>
            ))}
          </Tbody>
          </Table>
        </TableContainer>
        ) : (
        <Box>Aucun article selectionné.</Box>
        )}
      </DrawerBody>
      <Box position="absolute" bottom="10px" right="10px">
        <Button onClick={() => console.log("Creer La Demande")}>
        Confirmer
        </Button>
      </Box>
      </DrawerContent>
    </Drawer>
  </div>
);
};

export default Calendar;
