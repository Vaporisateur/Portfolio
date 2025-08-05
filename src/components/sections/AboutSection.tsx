import { Card, SectionHeader, ToolboxItemsRow, CardHeader } from '../ui';
import { toolboxItems } from '../../config/toolbox';
import mapImage from '../../assets/images/map.png';
import book from '../../assets/images/tolkien.jpeg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          heading1="À Propos de Moi"
          heading2="Un Aperçu de Mon Univers"
          paragraph="Découvrez qui je suis, ce que je fais, et ce qui m'inspire."
        />
        
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                heading="Mes Lectures"
                description="Explorez les livres qui façonnent ma perspective."
                className="md:py-2.5 md:px-4 lg:px-4 lg:py-1.5"
              />
              <div className="w-40 h-48 rounded-xl mx-auto mt-6 md:mt-3 lg:pt-1 overflow-hidden">
                <img src={book} alt="Livre de Tolkien" className="w-full h-full object-cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2 overflow-hidden">
              <CardHeader
                heading="Ma Boîte à Outils"
                description="Explorez les technologies et outils que j'utilise pour créer des expériences digitales exceptionnelles."
                className="md:py-2.5 md:px-4 lg:px-4 lg:py-1.5"
              />
              <ToolboxItemsRow
                items={toolboxItems}
                className="mt-4 md:mt-6"
                itemsWrapperClassName="animate-scroll-left [animation-duration:30s]"
              />
              <ToolboxItemsRow
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-scroll-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-6">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-4 lg:-mt-0.5">
              <CardHeader
                heading="Au-delà du Code"
                description="Explorez mes intérêts et hobbies au-delà du domaine digital."
                className="md:py-2.5 md:px-4 lg:px-4 lg:py-1.5"
              />
              <div className="relative z-0 flex-1 lg:-mt-1">
                <div className="flex flex-wrap gap-3 p-6">
                  <div className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full">
                    <span className="font-semibold text-gray-950">Musique</span>
                    <span>🎵</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full">
                    <span className="font-semibold text-gray-950">Gaming</span>
                    <span>🎮</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full">
                    <span className="font-semibold text-gray-950">Sport</span>
                    <span>🏋️</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full">
                    <span className="font-semibold text-gray-950">Lecture</span>
                    <span>📚</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full">
                    <span className="font-semibold text-gray-950">VTT</span>
                    <span>🚴</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2">
              <div className="h-full w-full relative rounded-3xl overflow-hidden">
                <img src={mapImage} alt="Ma localisation" className="h-full w-full object-cover" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                  <div className="size-20 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
                    😊
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
